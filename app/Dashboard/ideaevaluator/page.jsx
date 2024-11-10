"use client";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import DashboardLayout from '@/components/Dashlayout';
import axios from 'axios';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

// Validation Schema
const IdeaEvaluatorSchema = Yup.object().shape({
  teamname: Yup.string().required('Team Name is required'),
  program: Yup.string().required('Program is required'),
  semester: Yup.number().oneOf([1, 2, 3, 4, 5, 6, 7, 8], 'Please select a valid semester').nullable(),
  description: Yup.string().required('Description is required')
});

const IdeaEvaluator = () => {
  return (
    <DashboardLayout>
      <div className="data p-10">
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '4rem', marginLeft: '5rem', color: '#333' }}>
          Idea Evaluator
        </h1>
        <Formik
          initialValues={{ teamname: '', program: '', semester: '', description: '' }}
          validationSchema={IdeaEvaluatorSchema}
          onSubmit= { async(values, { resetForm }) => {
            console.log(values); 


            try {
              const response = await axios.post("/api/cohere/",values);
              if(response.data.success){
                Toastify({
                  text: "Idea Approved!",
                  duration: 3000,
                  close: true,
                  gravity: "top",
                  position: "right",
                  backgroundColor: "#4CAF50",
              }).showToast();
              }
              else{
                Toastify({
                  text: "Rejected",
                  duration: 3000,
                  close: true,
                  gravity: "top",
                  position: "right",
                  backgroundColor: "#FF6347",
              }).showToast();
              }
            } catch (error) {
              
            }
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxWidth: '400px',
              margin: '0 auto',
              padding: '1.5rem',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="teamname" style={{ marginBottom: '0.5rem', color: '#555' }}>Team Name</label>
                <Field
                  id="teamname"
                  name="teamname"
                  placeholder="Enter team name"
                  style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
                {errors.teamname && touched.teamname && (
                  <div style={{ color: 'red', fontSize: '0.875rem' }}>{errors.teamname}</div>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="program" style={{ marginBottom: '0.5rem', color: '#555' }}>Program</label>
                <Field
                  id="program"
                  name="program"
                  placeholder="e.g., BBA 7th Sem"
                  style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
                {errors.program && touched.program && (
                  <div style={{ color: 'red', fontSize: '0.875rem' }}>{errors.program}</div>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="semester" style={{ marginBottom: '0.5rem', color: '#555' }}>Semester</label>
                <Field
                  as="select"
                  id="semester"
                  name="semester"
                  style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                >
                  <option value="" label="Select semester" />
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                    <option key={sem} value={sem} label={`Semester ${sem}`} />
                  ))}
                </Field>
                {errors.semester && touched.semester && (
                  <div style={{ color: 'red', fontSize: '0.875rem' }}>{errors.semester}</div>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="description" style={{ marginBottom: '0.5rem', color: '#555' }}>Description</label>
                <Field
                  id="description"
                  name="description"
                  placeholder="Enter description"
                  as="textarea"
                  rows="4"
                  style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', resize: 'none' }}
                />
                {errors.description && touched.description && (
                  <div style={{ color: 'red', fontSize: '0.875rem' }}>{errors.description}</div>
                )}
              </div>

              <button 
                type="submit" 
                style={{
                  padding: '0.75rem',
                  backgroundColor: '#4CAF50',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </DashboardLayout>
  );
};

export default IdeaEvaluator;
