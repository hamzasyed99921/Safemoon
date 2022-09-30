import React from 'react'

const Contact = () => {
  return (
    <>
       <div className="container">
  <h2 className="text-center mb-4">Contact Us</h2>
  <div className="row">
    <div className="col-md-8">
      <form action="#" method="post">
        <input className="form-control" name="name" placeholder="Name" /><br />
        <input className="form-control" name="phone" placeholder="Phone" /><br />
        <input className="form-control" name="email" placeholder="E-mail" /><br />
        <textarea className="form-control" name="text" placeholder="How can we help you?" style={{height: 150}} defaultValue={""} /><br />
        <input className="btn btn-primary" defaultValue="Send" type="Sumit" /><br /><br />
      </form>   	 
    </div>
    <div className="col-md-4 text-center">
      <strong>Headquarter:</strong><br />
      Geeky Dev Pvt Ltd, <br />
      Harmu, Ranchi <br />
      Jharkhand - 834005 <br />
      Phone: +00000000 <br />
      <a href="https://www.geekyshows.com" target="_blank" className="text-danger">www.geekyshows.com</a>
      <br />
      <br />
      <br /> 
      <strong>Kolkata Branch:</strong> <br />
      Geeky Dev Pvt Ltd, <br />
      Sec V, Kolkata <br />
      WB - 804002 <br />
      Phone: +00000000 <br /> 
      <a href="https://www.geekyshows.com" target="_blank" className="text-danger">www.geekyshows.com</a> <br />
    </div>
  </div>
</div>

    </>
  )
}

export default Contact