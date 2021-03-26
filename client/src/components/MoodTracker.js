import React from 'react';


const MoodTracker = () => {

    return (
        
        <section className="flex bg-brown-sand bg-opacity-25 w-1/3 min-h-full h-auto" id="right">
            <div className="flex justify-around items-center w-full my-6">
                <div className="flex flex-col bg-brown-white rounded-xl w-3/5 h-moodTracker max-h-moodTracker my-6 justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-center w-full my-5"> Today </h1>
                        <div className="bg-brown-sand rounded-xl bg-opacity-25 m-1 py-3">
                            <h5 className="text-center w-full"> Feeling? </h5>
                            <div className="flex flex-row justify-center w-full"> 
                                <label for="happyFeeling">
                                    <input type="radio" name="feeling" id="happyFeeling" value="happy" className="happy hidden"/> 
                                    <svg className="hover:fill-current hover:text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z"></path></svg>
                                </label> 
                                <label for="neutralFeeling">
                                    <input type="radio" name="feeling" id="neutralFeeling" value="neutral" className="neutral opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M7.974 15H16V17H7.974z"></path></svg>
                                </label>
                                <label for="sadFeeling">
                                    <input type="radio" name="feeling" id="sadFeeling" value="sad" className="sad opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-red-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,14c-3,0-4,3-4,3h8C16,17,15,14,12,14z"></path></svg>
                                </label> 
                            </div>
                        </div>
                        <div className="bg-brown-sand rounded-xl bg-opacity-25 m-1 py-3">
                            <h5 className="text-center w-full"> Energy? </h5>
                            <div className="flex flex-row justify-center w-full"> 
                                <label for="happyEnergy">
                                    <input type="radio" name="energie" id="happyEnergy" value="happy" className="happy hidden"/> 
                                    <svg className="hover:fill-current hover:text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z"></path></svg>
                                </label>
                                <label for="neutralEnergy">
                                    <input type="radio" name="energie" id="neutralEnergy" value="neutral" className="neutral opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M7.974 15H16V17H7.974z"></path></svg>
                                </label>
                                <label for="sadEnergy">
                                    <input type="radio" name="energie" id="sadEnergy" value="sad" className="sad opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-red-600"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,14c-3,0-4,3-4,3h8C16,17,15,14,12,14z"></path></svg>                                  
                                </label>
                            </div>
                        </div>
                        <div className="bg-brown-sand rounded-xl bg-opacity-25 m-1 py-3">
                            <h5 className="text-center w-full"> Physical? </h5>
                            <div className="flex flex-row justify-center w-full"> 
                                <label for="happyPhysical">
                                    <input type="radio" name="physical" id="happyPhysical" value="happy" className="happy opacity-0 absolute" /> 
                                    <svg className="hover:fill-current hover:text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z"></path></svg>                                 
                                </label>

                                <label for="neutralPhysical">
                                    <input type="radio" name="physical" id="" value="neutralPhysical" className="neutral opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M7.974 15H16V17H7.974z"></path></svg> 
                                </label>

                                <label for="sadPhysical">
                                    <input type="radio" name="physical" id="sadPhysical" value="sad" className="sad opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-red-600"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,14c-3,0-4,3-4,3h8C16,17,15,14,12,14z"></path></svg>
                                </label>
                            </div>
                        </div>
                        <div className="bg-brown-sand rounded-xl bg-opacity-25 m-1 py-3">
                            <h5 className="text-center w-full"> Motivation? </h5>
                            <div className="flex flex-row justify-center w-full"> 
                                <label for="happyMotivation">
                                    <input type="radio" name="motivation" id="happyMotivation" value="happy" className="happy opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z"></path></svg> 
                                </label>

                                <label for="neutralMotivation">
                                    <input type="radio" name="motivation" id="neutralMotivation" value="neutral" className="neutral opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M7.974 15H16V17H7.974z"></path></svg> 
                                </label>

                                <label for="sadMotivation">
                                    <input type="radio" name="motivation" id="sadMotivation" value="sad" className="sad opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-red-600"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,14c-3,0-4,3-4,3h8C16,17,15,14,12,14z"></path></svg>                                
                                </label>               
                            </div>
                        </div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white w-18 h-12 py-2 mx-4 px-4 rounded-full my-5"> Friends </button>
                </div>
            </div>
        </section>
    );
}

export default MoodTracker;



