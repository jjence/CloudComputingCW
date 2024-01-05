"use client"

import { useFormState } from 'react-dom';
import { handleFormSubmit } from '../actions';

export default function Form() {

    const [state, formAction] = useFormState(handleFormSubmit, null);

    return (
        <>
        <form action={formAction} className='file-upload-form'>
            <label htmlFor="my-file">Select a file and upload</label>
            <input type="file" name="my-file" id="my-file" />
            <button type="Submit">Upload</button>
        </form>

        {state &&
        <div className='bg-teal-500 p-3'>{state?.message}</div>
        }
        </>
    )
}