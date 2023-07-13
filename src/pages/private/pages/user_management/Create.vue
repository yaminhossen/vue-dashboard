<template>
  <div class="user_create">
    <div class="create_title">
      <span class="create">Create</span>
      <span class="back_button">
        <span>
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        <span>Back</span>
      </span>
    </div>
    <div>
      <div>
        <form>
          <div class="row g-3">
            <div class="col-sm-4">
              <label class="form-label" for="username-vertical">Select User Role</label>
              <!-- <input type="" id="username-vertical" class="form-control" placeholder=""> -->
              <div>
                <select name="" id="" class="">
                  <option value="10">Student</option>
                  <option value="20">Admin</option>
                  <option value="30">Teacher</option>
                  <option value="40">Super Admin</option>
                </select>
              </div>
            </div>
            <div class="col-sm-4">
              <label class="form-label" for="username-vertical">First Name</label>
              <input type="text" id="username-vertical" class="form-control" placeholder="johndoe">
            </div>
            <div class="col-sm-4">
              <label class="form-label" for="username-vertical">Last Name</label>
              <input type="text" id="username-vertical" class="form-control" placeholder="johndoe">
            </div>
            <div class="col-sm-4">
              <label class="form-label" for="username-vertical">User Name</label>
              <input type="text" id="username-vertical" class="form-control" placeholder="johndoe">
            </div>
            <div class="col-sm-4">
              <label class="form-label" for="email-vertical">Email</label>
              <input type="email" id="email-vertical" class="form-control" placeholder="john.doe@email.com"
                aria-label="john.doe">
            </div>
            <div class="col-sm-4">
              <label class="form-label" for="email-vertical">Mobile Number</label>
              <input type="number" id="email-vertical" class="form-control" placeholder="" aria-label="john.doe">
            </div>
            <div class="col-sm-4 form-password-toggle">
              <label class="form-label" for="password-vertical">Password</label>
              <div class="input-group input-group-merge">
                <input type="password" id="password-vertical" class="form-control" placeholder="············"
                  aria-describedby="password2-vertical">
                <span class="input-group-text cursor-pointer" id="password2-vertical"><i class="ti ti-eye-off"></i></span>
              </div>
            </div>
            <div class="col-sm-4 form-password-toggle">
              <label class="form-label" for="confirm-password-vertical">Confirm Password</label>
              <div class="input-group input-group-merge">
                <input type="password" id="confirm-password-vertical" class="form-control" placeholder="············"
                  aria-describedby="confirm-password-vertical2">
                <span class="input-group-text cursor-pointer" id="confirm-password-vertical2"><i
                    class="ti ti-eye-off"></i></span>
              </div>
            </div>
            <div class="col-sm-4">
              <label class="form-label" for="email-vertical">Photo</label>
              <input type="file" id="email-vertical" class="form-control" placeholder="" aria-label="john.doe">
            </div>
          </div>
        </form>
      </div>
      <div class="create_border"></div>
      <div class="create_submit">
        <div><i class="fa-solid fa-upload"></i>Submit</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>