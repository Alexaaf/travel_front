import React, { useEffect, useState } from "react";
import axios from "axios";
import './admin_page.css';
import { useNavigate } from 'react-router-dom';


export default function AdminPage() {

    const [data, setData] = useState([]);
    const [editingDestination, setEditingDestination] = useState(null);
    const navigate = useNavigate();

    const [newDestination, setNewDestination] = useState({
        name: '',
        location: '',
        image: '',
        description: '',
        price_pn: '',
        available_places: '',
        baggage: false,
        hotel: false,
        plane: false,
        offer: '',
      });

      const checkUser = async () => {
        const role = sessionStorage.getItem("userRole");
        // console.log(role);
        if(role !== "AGENT")
        {
            navigate('/destinations');
        }
        
      }

      const fetchData = async () => {
        try {
          const apiUrl = `http://127.0.0.1:5000/api/destination/get_all`;
          const response = await axios.get(apiUrl);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    
      const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewDestination(prevState => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };

    const deleteDestination = async (destinationId) => {
        try {
          const response = await axios.delete(`http://127.0.0.1:5000/api/destination/${destinationId}`);
          console.log(response.data);
          // Remove the destination from the state to update the UI
        //   setData(data.filter(destination => destination.id !== destinationId));
        fetchData();
        } catch (error) {
          console.error('Error deleting destination:', error);
        }
      };

    const updateDestination = async (destinationId) => {
        try {
          const response = await axios.put(`http://127.0.0.1:5000/api/destination/update`, editingDestination);
          console.log(response.data);
        //   const updatedDestinations = data.map(destination => {
        //     if (destination.id === destinationId) {
        //       return {...destination, ...editingDestination};
        //     }
        //     return destination;
        //   });
        //   setData(updatedDestinations);
          fetchData();
          setEditingDestination(null);
        } catch (error) {
          console.error('Error updating destination:', error);
        }
    };

      const addDestination = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:5000/api/destination/add', newDestination);
          console.log(response.data);
        //   setData([...data, response.data]);
          fetchData();
          setNewDestination({
            name: '',
            location: '',
            description: '',
            image: '',
            price_pn: '',
            available_places: '',
            baggage: false,
            hotel: false,
            plane: false,
            offer: '',
          });
        } catch (error) {
          console.error('Error adding new destination:', error);
        }
      };

    useEffect(() => {
        checkUser();
        fetchData();
      }, []);

      return (
        <div>
          <h2 className="header-2">Destination Management</h2>
          <h3 className="header-3">Add Destination</h3>
          <form className="add-form" onSubmit={(e) => {
            e.preventDefault();
            addDestination();
            }}>
            <div>
            <input className="input-style"
                name="name"
                value={newDestination.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
            />
            <input className="input-style"
                name="location"
                value={newDestination.location}
                onChange={handleInputChange}
                placeholder="Location"
                required
            />
            <input className="input-style"
                name="image"
                value={newDestination.image}
                onChange={handleInputChange}
                placeholder="Image"
                required
            />
            <input className="input-style"
                type="number"
                name="available_places"
                value={newDestination.available_places}
                onChange={handleInputChange}
                placeholder="Available Places"
                required
            />
            <input className="input-style"
                type="number"
                name="price_pn"
                value={newDestination.price_pn}
                onChange={handleInputChange}
                placeholder="Price Per Night"
                required
            />
            <input className="input-style"
                type="number"
                name="offer"
                value={newDestination.offer}
                onChange={handleInputChange}
                placeholder="Offer (%)"
                required
            />
            <div className="boxes-tarea">
            <div className="check-boxes">
                <label>
                    Baggage Allowed:
                    <input className="boxes"
                    type="checkbox"
                    name="baggage"
                    checked={newDestination.baggage}
                    onChange={handleInputChange}
                    />
                </label>
                <label >
                    Hotel Included:
                    <input className="boxes"
                    type="checkbox"
                    name="hotel"
                    checked={newDestination.hotel}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Plane Included:
                    <input className="boxes"
                    type="checkbox"
                    name="plane"
                    checked={newDestination.plane}
                    onChange={handleInputChange}
                    />
                </label>
            </div>
            <textarea className="description"
                name="description"
                value={newDestination.description}
                onChange={handleInputChange}
                placeholder="Description"
                required
            />
            </div>
            </div>
            <div className="button-div">
                <button className="add-button" type="submit">Add Destination</button>
            </div>
            </form>
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Price Per Night</th>
                    <th>Available Places</th>
                    <th>Baggage Allowed</th>
                    <th>Hotel Included</th>
                    <th>Plane Included</th>
                    <th>Offer (%)</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((destination) => (
                    <tr key={destination.id}>
                    <td>{destination.id}</td>
                    <td>{destination.name}</td>
                    <td>{destination.location}</td>
                    <td>{destination.description}</td>
                    <td>${destination.price_pn}</td>
                    <td>{destination.available_places}</td>
                    <td>{destination.baggage ? 'Yes' : 'No'}</td>
                    <td>{destination.hotel ? 'Yes' : 'No'}</td>
                    <td>{destination.plane ? 'Yes' : 'No'}</td>
                    <td>{destination.offer}%</td>
                    <td>
                        <button className="table-button" onClick={() => deleteDestination(destination.id)}>Delete</button>
                        <button className="table-button" onClick={() => setEditingDestination(data.find(dest => dest.id === destination.id))}>Update</button>
                    </td>
                    </tr>
                ))}
            </tbody>
            </table>
            {editingDestination && (
                <div>
                    <h3 className="header-3">Update Destination</h3>
                    <form className="update-form" onSubmit={(e) => {
                        e.preventDefault();
                        updateDestination(editingDestination.id);
                    }}>
                        <input className="input-style"
                        name="name"
                        value={editingDestination.name}
                        onChange={(e) => setEditingDestination({...editingDestination, name: e.target.value})}
                        placeholder="Name"
                        required
                        />
                        <input className="input-style"
                        name="location"
                        value={editingDestination.location}
                        onChange={(e) => setEditingDestination({...editingDestination, location: e.target.value})}
                        placeholder="Location"
                        required
                        />
                        <input className="input-style"
                        name="image"
                        value={editingDestination.image}
                        onChange={(e) => setEditingDestination({...editingDestination, image: e.target.value})}
                        placeholder="Image"
                        required
                        />
                        <input className="input-style"
                        type="number"
                        name="available_places"
                        value={editingDestination.available_places}
                        onChange={(e) => setEditingDestination({...editingDestination, available_places: e.target.value})}
                        placeholder="Available Places"
                        required
                        />
                        <input className="input-style"
                        type="number"
                        name="price_pn"
                        value={editingDestination.price_pn}
                        onChange={(e) => setEditingDestination({...editingDestination, price_pn: e.target.value})}
                        placeholder="Price Per Night"
                        required
                        />
                        <input className="input-style"
                        type="number"
                        name="offer"
                        value={editingDestination.offer}
                        onChange={(e) => setEditingDestination({...editingDestination, offer: e.target.value})}
                        placeholder="Offer (%)"
                        required
                        />
                        <div className="boxes-tarea">
                            <div className="check-boxes">
                                <label>
                                Baggage Allowed:
                                <input className="boxes"
                                    type="checkbox"
                                    name="baggage"
                                    checked={editingDestination.baggage}
                                    onChange={(e) => setEditingDestination({...editingDestination, baggage: e.target.checked})}
                                />
                                </label>
                                <label>
                                Hotel Included:
                                <input className="boxes"
                                    type="checkbox"
                                    name="hotel"
                                    checked={editingDestination.hotel}
                                    onChange={(e) => setEditingDestination({...editingDestination, hotel: e.target.checked})}
                                />
                                </label>
                                <label>
                                Plane Included:
                                <input className="boxes"
                                    type="checkbox"
                                    name="plane"
                                    checked={editingDestination.plane}
                                    onChange={(e) => setEditingDestination({...editingDestination, plane: e.target.checked})}
                                />
                                </label>
                            </div>
                        <textarea className="description"
                        name="description"
                        value={editingDestination.description}
                        onChange={(e) => setEditingDestination({...editingDestination, description: e.target.value})}
                        placeholder="Description"
                        required
                        />
                        </div>
                        <button className="update-button" type="submit">Submit Update</button>
                        <button className="update-button" type="button" onClick={() => setEditingDestination(null)}>Cancel</button>
                    </form>
                </div>
                )}
        </div>
      );

}