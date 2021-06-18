import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import CreateFormContainer from '../../../components/containers/createFormContainer';
import RootContainer from '../../../components/containers/rootCotainer';
import { createProduct } from '../reducerSlices/productSlice';

function CreateProduct(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);

    const isModelValid = [name, description, quantity].every(Boolean);

    const onSaveClicked = async () => {
        if (isModelValid) {
            try {
                await dispatch(
                    createProduct({
                        id: nanoid(),
                        name: name,
                        description: description,
                        quantity: quantity
                    })
                );
            }
            catch (err) {
                console.error('Failed to save the post: ', err)
            }
            finally {
                history.push("/");
            }
        }
    };

    return (
        <>
            <RootContainer
                rootTitle={
                    <>
                        <i className="fa fa-plus mr-2" aria-hidden="true"></i>Create Product
                    </>
                }
                rootContent={
                    <CreateFormContainer
                        formContent={
                            <>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label id="lblName" htmlFor="txtName">Name</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-address-card"></i></span>
                                                </div>
                                                <input id="txtName"
                                                    name="txtName"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Product Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label id="lblQuantity" htmlFor="txtQuantity">Quantity</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-address-card"></i></span>
                                                </div>
                                                <input id="txtQuantity"
                                                    name="txtQuantity"
                                                    type="number"
                                                    className="form-control"
                                                    min="0"
                                                    step="1"
                                                    max="100"
                                                    placeholder="0"
                                                    value={quantity}
                                                    onChange={(e) => setQuantity(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label id="lblName" htmlFor="txtName">Name</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-address-card"></i></span>
                                                </div>
                                                <textarea
                                                    id="txtDescription"
                                                    name="txtDescription"
                                                    value={description}
                                                    className="form-control"
                                                    rows="4"
                                                    cols="10"
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    placeholder="Please add product description">
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        isModelValid={isModelValid}
                        onSaveClicked={onSaveClicked}
                        onCancelClicked={() => history.push(`/`)} />
                } />
        </>
    );
}

export default CreateProduct;