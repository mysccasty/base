import {Form, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css"
import style from "../../Common/FormsControls/FormsControls.module.css";
import React from "react";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <Form onSubmit={handleSubmit}>
        <div>
            <div>
                <button>save</button>
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>Full name:</b> {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job:</b>
                {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills:</b>
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea,)}
            </div>
            <div>
                <b>About me:</b>
                {createField("About me", "aboutMe", [], Textarea,)}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: </b> {createField(key, "contacts." + key, [], Input)}
                </div>}
            )}
            </div>
        </div>
    </Form>
}
const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataReduxForm;