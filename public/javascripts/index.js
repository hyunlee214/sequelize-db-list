window.onload = () => {
  console.log('test onload');
  
  let memberForm = document.getElementById('member-form');
  memberForm.addEventListener('submit', async (evt) => {

    let username = document.getElementById('input-username').value;
    let password = document.getElementById('input-password').value;
    let obj = {
      username: username,
      password: password
    };
    await axios.post('/member', obj);
    });
};