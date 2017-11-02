basic-saga
--
middleware 检查每个 yield Effect 的类型，然后决定如何实现那个 Effect。

* yield call : 调用给定的函数 -- (Effect 创建)
* yield take(action)  
* yield put: 发起一个action到Store -- （Effect 执行） 
* yield cancel(task)：取消一个任务
* yield fork(fn,..args):无阻塞执行fn

Hoc
--   
* yield takeEvery('actionName', generator): 启动一个新的任务
* yield takeLatest('FETCH_REQUESTED', fetchData)：只允许执行最新的 fetchData 任务，会取消之前的任务
