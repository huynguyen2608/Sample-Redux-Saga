import { call, put, takeLatest } from "redux-saga/effects";
import fetchGetUsers from "../../../Api/api";

function* handleGetUsers() {
  try {
    const users = yield call(fetchGetUsers);
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (err) {
    yield put({ type: "GET_USERS_FAILED", message: err.message });
  }
}

function* watcherUserSaga() {
  yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
}

export default watcherUserSaga;
