import { useRef } from "react"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'




const Contact = () => {

    const form = useRef()





    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_201u4pn', 'template_tey7iqu', form.current, {
                publicKey: '0T7u8baWf3DysoM5f',
            })
            .then(
                () => {
                    console.log('SUCCESS!');

                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your email has been send",
                        showConfirmButton: false,
                        timer: 1500
                      });;
                },
                (error) => {
                    console.log('FAILED...', error.text);

                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Please try it again?</a>'
                      })
                },
            );
        e.target.reset()
    };





    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>

            <form ref={form} onSubmit={sendEmail}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' placeholder="name" required />

                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' placeholder="phone" required />

                    </div>
                </div>

                <div className='flex flex-col py-2 '>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' placeholder="email" required />

                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' placeholder="subject" required />

                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p3 border-gray-300' rows="10" name='message' placeholder="message" required />

                </div>
                <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg' type="submit" >Send Message</button>
            </form>
        </div>

    )
}

export default Contact
