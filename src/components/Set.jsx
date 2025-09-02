import React from 'react'
import { useForm } from 'react-hook-form'

const Set = () => {
    const { register, handleSubmit , formState: { errors } } = useForm();
    const onSubmit = async (data) => {console.log(data)
        const res = await fetch('http://localhost:5000/set', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await res.json()
        console.log(result)
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="number" style={{ margin: "20px" }} {...register("number", { required: { value: true, message: "Field is required"} })}/>
                {errors.number && <p>{errors.number.message}</p>}
                <input type="submit" />
            </form>
        </div>
    )
}

export default Set
