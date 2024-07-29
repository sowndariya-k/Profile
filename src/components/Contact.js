export default function Contact() {
    
    const config ={
        email : ' Sownndariyadeveloper@gmail.com',
        phone : ' +91 6374867255'
    }

    return <section className='flex flex-col px-5 py-32 bg-primary text-white' id='Contact'>
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl border-b-4 border-secondary  mb-5 w-[130px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, Please contact </p>
            <p><span className="font-bold">Email : </span>{config.email}</p>
            <p><span className="font-bold">Phone : </span>{config.phone}</p>
            </div>
      
    </section>
}