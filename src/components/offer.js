import React, { Component } from 'react';

class Offer extends Component {
    render() {
        return (
            <div className="container offer-page">
                <div className="header-section text-center">
                    <h2 className="text-uppercase">
                        what can i <span className="colored">offer!!</span>
                    </h2>
                    <small>
                        I offer customers the best services and Solutions, this is my main services list.
                    </small>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <span><img src="" alt=""/></span>
                        <i class="fas fa-laptop fa-3x"></i>
                        <h5 className="text-bold text-uppercase">
                            responsive & multipurpose
                        </h5>
                        <p className="small">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque impedit quaerat aperiam rem amet, nulla veniam iste omnis vitae cumque dolorum quae incidunt voluptate libero quisquam optio iusto numquam.
                        </p>
                        <button type="button" class="btn btn-default btn-sm">read more</button>
                    </div>
                    <div className="col text-center">
                        <span><img src="" alt=""/></span>
                        <h5 className="text-bold text-uppercase">
                            easy customization
                        </h5>
                        <p className="small">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque impedit quaerat aperiam rem amet, nulla veniam iste omnis vitae cumque dolorum quae incidunt voluptate libero quisquam optio iusto numquam.
                        </p>
                        <button type="button" class="btn btn-default btn-sm">read more</button>
                    </div>
                    <div className="col text-center">
                        <span><img src="" alt=""/></span>
                        <h5 className="text-bold text-uppercase">
                            awesome friendly support
                        </h5>
                        <p className="small">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque impedit quaerat aperiam rem amet, nulla veniam iste omnis vitae cumque dolorum quae incidunt voluptate libero quisquam optio iusto numquam.
                        </p>
                        <button type="button" class="btn btn-default btn-sm">read more</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Offer;