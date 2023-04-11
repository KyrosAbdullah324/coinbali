import API from "../API";
// import AsyncStorage from '@react-native-community/async-storage';

export function login(data) {
  return async (dispatch) => {
    API.post("auth/login", data)
      .then((result) => {
        dispatch(setUser(result.data.data.user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function setUser(data) {
  // console.log('result.data.data.user')
  return { type: "setUser", data };
}

export function register(data, navigate, toast) {
  return async (dispatch) => {
    API.post("auth/register", data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function logout(navigate) {
  return async (dispatch) => {
    dispatch(setUser(""));
    navigate("signIn");
  };
}

export function verificationcode(data, navigate, toast) {
  return async (dispatch) => {
    API.post("auth/verification", data)
      .then((result) => {
        if (result.data.status === "success") {
          dispatch({ type: "settempcode", data: "" });
          navigate("setProfile", {email: result.data.email});
        }
      })
      .catch((err) => {
        toast.show(JSON.parse(err.request.response).message, {
          duration: 5000,
          type: "warning",
          placement: "bottom",
        });
      });
  };
}

export function verificationresend(data, navigate, toast) {
  return async (dispatch) => {
    API.post("auth/resend", data)
      .then((result) => {
        if (result.data.status === "success") {
          toast.show("Verification code resend", {
            duration: 5000,
            type: "success",
            placement: "bottom",
          });
          dispatch({ type: "settempemail", data: data.email });
        }
      })
      .catch((err) => {
        toast.show(JSON.parse(err.request.response).message, {
          duration: 5000,
          type: "warning",
          placement: "bottom",
        });
      });
  };
}

export function resetPassword(data, navigate, toast) {
  return async (dispatch) => {
    API.post("auth/reset", data)
      .then((result) => {
        if (result.data.status === "success") {
          dispatch({ type: "settempemail", data: result.data.email });
          navigate("verification", { id: "signed" });
        }
      })
      .catch((err) => {
        toast.show(JSON.parse(err.request.response).message, {
          duration: 5000,
          type: "warning",
          placement: "bottom",
        });
      });
  };
}

export function resetverificationcode(data, navigate, toast) {
  return async (dispatch) => {
    API.post("auth/resetcode", data)
      .then((result) => {
        if (result.data.status === "success") {
          // dispatch({type: 'settempcode', data: ''});
          navigate("setUpPassword");
        }
      })
      .catch((err) => {
        toast.show(JSON.parse(err.request.response).message, {
          duration: 5000,
          type: "warning",
          placement: "bottom",
        });
      });
  };
}

export function resetverificationresend(data, navigate, toast) {
  return async (dispatch) => {
    API.post("auth/reset", data)
      .then((result) => {
        if (result.data.status === "success") {
          toast.show("Verification code resend", {
            duration: 5000,
            type: "success",
            placement: "bottom",
          });
          dispatch({ type: "settempemail", data: result.data.email });
        }
      })
      .catch((err) => {
        toast.show(JSON.parse(err.request.response).message, {
          duration: 5000,
          type: "warning",
          placement: "bottom",
        });
      });
  };
}

export function setUpPass(data, navigate, toast) {
  return async (dispatch) => {
    API.post("auth/setUpPassword", data)
      .then((result) => {
        if (result.data.status === "success") {
          dispatch({ type: "settempemail", data: "" });
          navigate("signIn");
        }
      })
      .catch((err) => {
        toast.show(JSON.parse(err.request.response).message, {
          duration: 5000,
          type: "warning",
          placement: "bottom",
        });
      });
  };
}

export function updateprofile(data, navigate) {
  return async (dispatch) => {
    API.post("auth/updateprofile", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((result) => {
        if (result.data.status === "success") {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          dispatch(setUser(""));
          navigate("signIn");
        }
      })
      .catch((err) => {
        toast.show('Server Error', {
          duration: 5000,
          type: "warning",
          placement: "bottom",
        });
      });
  };
}
