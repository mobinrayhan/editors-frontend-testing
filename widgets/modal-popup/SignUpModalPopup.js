// import node module libraries
import { Button, Form, Modal } from 'react-bootstrap'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import * as yup from "yup";

const SignUpModalPopup = (props) => {
    const schema = yup
        .object({
            email: yup.string().email("Please enter valid email").required('Please enter email'),
            username: yup.string().required("Please enter valid username."),
            password: yup.string().min(6, "Please enter valid password."),
        }).required();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const formSubmit = data => {
        console.log(data)
        props.onHide();
        reset
    }
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="fw-bold mb-0">Sign up</h3>
                    <div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onHide}></button>
                    </div>
                </div>
                <Form onSubmit={handleSubmit(formSubmit)}>

                    {/* Username */}
                    <div className="mb-3">
                        <Form.Group controlId="username" >
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="User Name"  {...register("username")} />
                            <div className="form-text text-danger ms-2">{errors.username?.message}</div>
                        </Form.Group>
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <Form.Group controlId="email" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email address here"  {...register("email")} />
                            <div className="form-text text-danger ms-2">{errors.email?.message}</div>
                        </Form.Group>
                    </div>


                    {/* Password */}
                    <div className="mb-3">
                        <Form.Group controlId="password" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="*************"  {...register("password")} />
                            <div className="form-text text-danger ms-2">{errors.password?.message}</div>
                        </Form.Group>
                    </div>
                    <div>
                        <div>
                            <Button type="submit"  >Create Free Account</Button>
                        </div>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default SignUpModalPopup