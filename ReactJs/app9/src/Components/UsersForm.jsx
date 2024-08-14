import React from 'react';

const UserForm = ({ User, handleChange, isEdit, UpdateUser, CreateUser }) => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputFullName" className="form-label">Full name</label>
                    <input type="text" className="form-control" name='Fullname' value={User.Fullname} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">User Name</label>
                    <input type="text" className="form-control" name='Username' value={User.Username} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='Gmail' value={User.Gmail} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPhoneNumber" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" name='PhoneNo' value={User.PhoneNo} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" name='PassWord' value={User.PassWord} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputConfirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='ConfPassword' value={User.ConfPassword} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="gender-label">Gender</label>
                    <div className="gender-options">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={User.gender === "male"}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={User.gender === "female"}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="other"
                                checked={User.gender === "other"}
                                onChange={handleChange}
                            />
                            Other
                        </label>
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label">deggroup</label>
                    <select class="form-select" id="degree">
                        <option selected>Select group</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Business">Business</option>
                        <option value="Science">Science</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Hobbies</label>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Playing" name="Hobbies" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Playing
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Reading" name="Hobbies" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Reading
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Excersing" name="Hobbies" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Excersing
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="singing" name="Hobbies" />
                        <label class="form-check-label" for="flexCheckChecked">
                            singing
                        </label>
                    </div>
                </div>

                <div class="mb-3">
                    <h5>Adress</h5>
                    <textarea name="" id="address" rows="3"></textarea>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <div class="mb-3">
                    <div class="form-group">
                        <label for="FileUpload">Upload File</label>
                        <input type="file" class="form-control-file" id="FileUpload"/>
                    </div>
                </div>



                {isEdit ? (
                    <button type="button" className="btn btn-primary" onClick={UpdateUser}>Update</button>
                ) : (
                    <button type="button" className="btn btn-primary" onClick={CreateUser}>Submit</button>
                )}
            </form>
        </div>
    );
};

export default UserForm;
