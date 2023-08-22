import InputComponent from "@/components/input/InputComponent";
import BaseLayout from "@/components/layout/BaseLayout";
import { Input } from "postcss";

export default function SignUpPage() {
    return <>
        <BaseLayout>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <InputComponent label="First Name" type="text" placeholder="Enter first name" id="first_name" value="" onChange={() => { }} />
                                    </div>
                                    <div className="col">
                                        <InputComponent label="Last Name" type="text" placeholder="Enter last name" id="last_name" value="" onChange={() => { }} />
                                    </div>
                                </div>
                                <InputComponent label="Email" type="email" placeholder="Enter email" id="email" value="" onChange={() => { }} />
                                <InputComponent label="Password" type="password" placeholder="Enter password" id="password" value="" onChange={() => { }} />
                                <InputComponent label="Confirm Password" type="password" placeholder="Enter confirm password" id="confirm_password" value="" onChange={() => { }} />
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </BaseLayout>
    </>
}