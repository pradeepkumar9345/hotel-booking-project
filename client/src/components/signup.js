import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup() {
  return (
   <div>
               <section class="vh-100 sign-bg" >
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-9">

        <h1 class="text-white mb-4">hotel booking</h1>

        <div class="card sign-card" >
          <div class="card-body">

            <div class="row align-items-center pt-4 pb-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Full name</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input type="text" class="form-control form-control-lg" />

              </div>
            </div>

            <hr class="mx-n3"/>

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Email address</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input type="email" class="form-control form-control-lg" placeholder="example@example.com" />

              </div>
            </div>

            <hr class="mx-n3"/>

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Full name</h6>

              </div>
              <div class="col-md-9 pe-5">

                <textarea class="form-control" rows="3" placeholder="Message sent to the employer"></textarea>

              </div>
            </div>

            <hr class="mx-n3"/>

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Upload aadhar</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input class="form-control form-control-lg" id="formFileLg" type="file" />
                <div class="small text-muted mt-2">Upload your aadhar image
                  size 5 MB</div>

              </div>
            </div>

            <hr class="mx-n3"/>

            <div class="px-5 py-4">
              <button type="submit" class="btn btn-primary btn-lg">Submit</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
   </div>
  );
}

export default Signup;