import images from '../assets';

const data = [
  {
    id: 1,
    title: 'MERN Invoice App',
    img: images.project1,
    code: 'https://github.com/MathisHumbert/mern-invoice-app',
    website: 'https://mern-invoice-app.herokuapp.com/',
    header: 'header_text',
    tech: 'React / Redux / Styled Components / NodeJS / Express / MongooDB',
    challenges: ['ch1', 'ch2', 'ch3', 'ch4', 'ch5'],
    success: ['su1', 'su2', 'su3', 'su4', 'su5'],
    codeExamples: [
      `React package.json:
"proxy":"http://localhost:5000"

Server app.js:
const port = process.env.PORT || 5000`,
      `FRONT:
// login or register
export const setupUser = (formUser, type, alertText) => {
  return (dispatch) => {
    dispatch({ type: SETUP_USER_BEGIN });
    axios
      .post(\`/api/v1/auth/$\{type}\`, formUser)
      .then((response) => {
        const { user, token } = response.data;
        dispatch({
          type: SETUP_USER_SUCCESS,
          payload: { data: response.data, alertText },
        });
        addUserToLocalStorage(user, token);
      })
      .catch((error) =>
        dispatch({ type: SETUP_USER_ERROR, payload: error.response.data.msg })
      );
    setTimeout(() => {
      dispatch({ type: CLEAR_USER_ALERT });
    }, 3000);
  };
};

//logout 
export const logoutUser = () => {
  const root = document.getElementById('root');
  root.classList.remove('stop-scrolling');
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };
};

BACK:
// When a user register we hash his password
UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// When a user login we compare his password and the one in the input
UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

// Then we create a token, so now the user can have access to his invoices
UserSchema.methods.createJWT = function () {
  return jwt.sign({ userID: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};`,
    ],
  },
];

export default data;
