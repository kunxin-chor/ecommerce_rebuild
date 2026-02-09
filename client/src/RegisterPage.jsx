import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
function RegisterPage() {

    const [marketingPreferences, setMarketingPreferences] = useState([]);

    useEffect(() => {
        const fetchMarketingPreferences = async () => {
            try {
                const response = await axios.get('/marketingPreferences.json');
                setMarketingPreferences(response.data);
            } catch (error) {
                console.error('Error loading marketing preferences:', error);
            }
        };

        fetchMarketingPreferences();
    }, []);

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        salutation: '',
        marketingPreferences: [],
        country: ''
    };

    const handleSubmit = (values, formikHelpers) => {
        // Here you would typically make an API call to register the user
        console.log('Form values:', values);
        formikHelpers.setSubmitting(false);
    };

    return (
        <div className="container mt-5">
            <h1>Register</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {(formik) => (
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label" name="name">Name</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" name="email">Email</label>
                            <Field
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" name="password">Password</label>
                            <Field
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label" name="confirm-password">Confirm Password</label>
                            <Field
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Salutation</label>
                            <div>
                                <div className="form-check form-check-inline">
                                    <Field
                                        className="form-check-input"
                                        type="radio"
                                        name="salutation"
                                        id="mr"
                                        value="Mr"
                                    />
                                    <label className="form-check-label" htmlFor="mr">Mr</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Field
                                        className="form-check-input"
                                        type="radio"
                                        name="salutation"
                                        id="ms"
                                        value="Ms"
                                    />
                                    <label className="form-check-label" htmlFor="ms">Ms</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Field
                                        className="form-check-input"
                                        type="radio"
                                        name="salutation"
                                        id="mrs"
                                        value="Mrs"
                                    />
                                    <label className="form-check-label" htmlFor="mrs">Mrs</label>
                                </div>
                            </div>
                        </div>

                        {/* Marketing Preferences from JSON */}
                        <div className="mb-3">
                            <label className="form-label">Marketing Preferences</label>

                            {marketingPreferences.map((preference) => (
                                <div className="form-check" key={preference.id}>
                                    <Field
                                        type="checkbox"
                                        name="marketingPreferences"
                                        value={String(preference.id)}
                                        className="form-check-input"
                                        id={`marketing-${preference.id}`}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor={`marketing-${preference.id}`}
                                    >
                                        {preference.name}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">Country</label>
                            <Field
                                as="select"
                                className="form-select"
                                id="country"
                                name="country"
                            >
                                <option value="">Select Country</option>
                                <option value="sg">Singapore</option>
                                <option value="my">Malaysia</option>
                                <option value="in">Indonesia</option>
                                <option value="th">Thailand</option>
                            </Field>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={formik.isSubmitting}
                        >
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterPage;