import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import Dashboard from "../Pages/Dashboard";
import Accepted from "../Pages/Accepted";
import Delivered from "../Pages/Delivered";
import PendingTable from "../Pages/PendingTable";
import Dispach from "../Pages/Dispach";
import Preparing from "../Pages/Preparing";
import Ready from "../Pages/Ready";
import RejectedTable from "../Pages/RejectedTable";
import Login from "../Pages/Login";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Sidebar>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/accepted" element={<Accepted />} />
                        <Route path="/delivered" element={<Delivered />} />
                        <Route path="/dispach" element={<Dispach />} />
                        <Route path="/pendingTable" element={<PendingTable />} />
                        <Route path="/preparing" element={<Preparing />} />
                        <Route path="/ready" element={<Ready />} />
                        <Route path="/rejectedTable" element={<RejectedTable />} />
                    </Routes>
                </Sidebar>
            </BrowserRouter>
        </div>
    );
}

export default App;