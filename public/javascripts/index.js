window.onload = () => {
  console.log('test onload');
  
  const memberForm = document.getElementById('member-form');
  memberForm.addEventListener('submit', async (evt) => {

    const username = document.getElementById('input-username').value;
    const password = document.getElementById('input-password').value;
    const obj = {
      userName: userName,
      password: password
    };
    await axios.post('/member', obj);
    });
};