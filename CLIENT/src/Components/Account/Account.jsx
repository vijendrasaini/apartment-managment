import './account.css'

export const Account = () => {

    return (
        <>
            <h1 className="mt-5">Resister</h1>

            <div className='container my-container'>
                <div className="split left">
                    <div className="centered">
                        <div className="container mt-5">
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mt-5 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <button className="btn btn-primary mt-5" type="button">SIGN UP</button>
                        </div>
                    </div>
                </div>

                <div className="split right">
                    <div className="centered">
                        <div className="container mt-5">
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mt-5 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <button className="btn btn-primary mt-5" type="button">SIGN IN</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}