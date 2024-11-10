"use client";
import { Formik, Form, Field } from 'formik';
import DashboardLayout from '@/components/Dashlayout';

const IdeaEvaluator = () => {
  return (
    <DashboardLayout>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>Idea Evaluator</h1>
      <Formik
        initialValues={{ teamname: '', semester: '', description: '' }}
        onSubmit={(values) => {
          console.log(values);  // Replace with desired submission logic
          alert("Form submitted!");
        }}
      >
        {() => (
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
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="semester" style={{ marginBottom: '0.5rem', color: '#555' }}>Semester</label>
              <Field
                id="semester"
                name="semester"
                placeholder="Enter semester"
                style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
              />
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
    </DashboardLayout>
  );
};

export default IdeaEvaluator;
