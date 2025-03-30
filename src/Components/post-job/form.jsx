import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import "./form.css"
import { userRequest } from "../../apirequests";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import Upload from "../upload-img/Upload";
import InputFileUpload from "../upload-img/UploadButton";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Postform() {

  const [img, setimgurl] = useState("");
  const [responsibilities, setresponsibilities] = useState([]);
  // const [location, setlocation] = useState("");
  const [title, settitle] = useState("");
  const [vacancy, setvacancy] = useState("");
  const [time, settime] = useState("");
  const [location, setlocation] = useState([]);
  const [qualifications, setqualification] = useState([]);
  const [salary, setsalary] = useState([]);
  const [content, setcontent] = useState('');
  const [tag, settag] = useState([]);
  const [checkbox, setcheckbox] = useState(true);
  const [progress, setProgress] = useState(0);



  const colourOptions = [
    { value: 'Remote Worldwide', label: 'Remote Worldwide' },
    { value: 'Nigeria', label: 'Nigeria' },
    { value: 'Uk', label: 'Uk' },
    { value: 'Spain', label: 'Spain' }
  ]

  const colourOptions1 = [
    { value: 'BSC holder', label: 'E,g Bsc Holder' }
  ]

  const colourOptions2 = [
    { value: '$10000-$15000', label: '$10000-$15000' },
  ]

  const tagoption = [
    { value: 'React', label: 'React' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Python', label: 'Python' },
  ]

  let navigate = useNavigate()

  const postdetails = {
    img: img?.filePath, title, content, location, responsibilities, qualifications, vacancy, salary, time, tag
  }

  // if (!postdetails.img || postdetails.title || postdetails.content || postdetails.responsibilities.length === 0) {
  // }

  const handlecheckbox = () => {
    setcheckbox(!checkbox)
  }

  let user = useSelector((state) => state.user.currentUser);

  const TOKEN = user?.accessToken

  console.log(
    TOKEN
  )

  const BASE_URL = "https://jobs-api-u83r.onrender.com/api/";

  const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
  });

  const handleClick = async () => {
    try {
      await userRequest.post('/jobs', postdetails)
      toast.success("Job posted successfully")
      navigate('/')
    } catch (error) {
      toast.error("error")
      console.log(error)
    }
  }

  console.log(img)


  return (
    <>
      <Form>
        <Col className="mb-3">
          <Form.Group as={Col} controlId="formGridText" className="mb-3">
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              variant='flat'
              type="text"
              size="lg"
              className="ccc"
              placeholder="E.g React Developer"
              onChange={(e) => settitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridText" className="mb-0">
            <Form.Label>Cover Image : <Upload type='image' setData={setimgurl} setProgress={setProgress} /></Form.Label>
            {/* <Form.Control
              type="text"
              size="lg"
              placeholder="Enter Image Url"
              onChange={(e) => setimgurl(e.target.value)}
            /> */}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity" className="mb-3">
            <Form.Label>Location</Form.Label>
            <CreatableSelect
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              isMulti
              name="colors"
              options={colourOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(option) => setlocation((option?.map((option) => { return option?.value })))}
            />
            {/* <Form.Control /> */}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity" className="mb-3">
            <Form.Label>responsibilities</Form.Label>
            <CreatableSelect
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              isMulti
              name="colors"
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(option) => setresponsibilities((option?.map((option) => { return option?.value })))}
            />
            {/* <Form.Control /> */}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity" className="mb-3">
            <Form.Label>qualifications</Form.Label>
            <CreatableSelect
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              isMulti
              name="colors"
              options={colourOptions1}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(option) => setqualification((option?.map((option) => { return option?.value })))}
            />
            {/* <Form.Control /> */}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridText" className="mb-3">
            <Form.Label>Vacancy</Form.Label>
            <Form.Control
              type="number"
              size="lg"
              placeholder="e.g 2"
              onChange={(e) => setvacancy(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Form.Group as={Col} controlId="formGridCity" className="mb-3">
          <Form.Label>salary</Form.Label>
          <CreatableSelect
            // defaultValue={[colourOptions[2], colourOptions[3]]}
            isMulti
            name="colors"
            options={colourOptions2}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(option) => setsalary((option?.map((option) => { return option?.value })))}
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Time</Form.Label>
          <Form.Control
            placeholder="e.g Fulltime"
            size="lg"
            onChange={(e) => settime(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity" className="mb-3">
          <Form.Label>tag</Form.Label>
          <CreatableSelect
            // defaultValue={[colourOptions[2], colourOptions[3]]}
            isMulti
            name="colors"
            options={tagoption}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(option) => settag((option?.map((option) => { return option?.value })))}

          />
          {/* <Form.Control /> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Job Description</Form.Label>
          <Form.Control as="textarea" rows={3}
            onChange={(e) => setcontent(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="You accept to our terms and condition" onChange={handlecheckbox} />
        </Form.Group>
        {/* <Link to="/checkout"> */}
        <Button
          variant="contained"
          // type="submit"
          // href="/checkout"
          onClick={handleClick}
          disabled={checkbox}
        >
          Post Job Listing
        </Button>
        {/* </Link> */}
      </Form>
    </>

  )

}
