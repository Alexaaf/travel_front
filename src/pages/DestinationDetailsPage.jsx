import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import '../components/stats.css';
import { groupBy } from 'lodash';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function DestinationDetailsPage() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

    let { id } = useParams();
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/api/reservation/${id}`);
                setReservations(response.data);
            } catch (error) {
                console.error('Error fetching reservation data:', error);
            }
        };

        fetchReservations();
    }, [id]);

    const reservationStatistics = () => {

        const groupedByMonth = groupBy(reservations, (reservation) =>
            new Date(reservation.start_date).getMonth()
        );

        const data = {
            labels: Object.keys(groupedByMonth).map(month => new Date(0, month).toLocaleString('default', { month: 'long' })),
            datasets: [{
                label: 'Number of Reservations',
                data: Object.values(groupedByMonth).map(reservations => reservations.length),
                backgroundColor: 'rgba(0, 0, 255, 0.6)',
            }],
        };

        const options = {
            scales: {
                x: {
                    type: 'category',
                    labels: Object.keys(groupedByMonth).map(month =>
                        new Date(0, parseInt(month, 10)).toLocaleString('default', { month: 'long' })
                    ),
                },
            },
        };
    
        return { data, options };
    };

    return (
      <div>
        <h2 className="h">Destination Details for ID: {id}</h2>
        <div className="stats-div">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={reservations.map(reservation => ({
                    title: 'Reserved',
                    start: reservation.start_date,
                    end: new Date(new Date(reservation.end_date).getTime() + (24 * 60 * 60 * 1000)).toISOString().split('T')[0],
                }))}
            />
            <div className="chart-div">
                <h3>Reservation Statistics</h3>
                <Bar data={reservationStatistics().data} options={reservationStatistics().options} />
            </div>
        </div>
      </div>
    );
}
