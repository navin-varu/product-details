import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { removeProduct, selectProducts } from '../reducerSlices/productSlice';
import RootContainer from '../../../components/containers/rootCotainer';
import AddButton from '../../../components/buttons/addButton';
import EditLinkButon from '../../../components/buttons/editLinkButon';
import DeleteLinkButton from '../../../components/buttons/deleteLinkButton';

function Products(props) {
    const dispatch = useDispatch();
    const history = useHistory();


    const products = useSelector(selectProducts);

    const onDeleteClicked = async (id) => {
        try {
            if (window.confirm("Are you sure, you want to delete product?")) {
                dispatch(removeProduct(id));
            }
        }
        finally {
        }
    };

    let tbodyContent;

    if (products && products.length > 0) {
        tbodyContent = products.map((product, index) => (
            <tr key={product.id}>
                <td className="text-right">{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td className="text-center">
                    <>
                        <EditLinkButon
                            routeName={`/edit/${product.id}`} />
                        <DeleteLinkButton
                            onDeleteClicked={() => onDeleteClicked(product.id)} />
                    </>
                </td>
            </tr>
        ))
    }
    else {
        tbodyContent = <tr>
            <td colSpan='5'>No records available...</td>
        </tr>;
    }

    return (
        <>
            <RootContainer
                rootTitle={
                    <>
                        <i className="fa fa-list-ul mr-2" aria-hidden="true"></i>Products
                    </>
                }
                rootContent={
                    <>
                        < div className="row" >
                            <div className="col-md-12">
                                <AddButton
                                    routeName="/create"
                                    buttonText="Product" />
                            </div>
                        </div >
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-hover table-bordered table-responsive-lg table-shadow">
                                    <thead className="thead-light">
                                        <tr className="text-center">
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tbodyContent}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                } />
        </>
    );
}

export default Products;