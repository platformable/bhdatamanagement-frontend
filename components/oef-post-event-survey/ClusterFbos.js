import React, { useState, useEffect } from "react";

const ClusterFbos = ({ fbos, eventForm, setEventForm, selectedCluster }) => {
  const [fbosArray, setFbosArray] = useState([]);
  const [cluster, setCluster] = useState([...eventForm?.clusterFbos]);

  //PUT TWO USEEFFECT TO DELETE FBOS WHEN CHANGE THE SELECTED CLUSTER
  useEffect(() => {
    const orderedFbos = fbos
      .filter(
        (fbo) =>
          fbo.boroughfbo === selectedCluster.replace("Cluster", "").trim()
      )
      .sort((a, b) => a.namefbo.localeCompare(b.namefbo, "en"));

    setFbosArray(orderedFbos);
    setCluster([...eventForm?.clusterFbos])
  }, [selectedCluster]);

  useEffect(() => {
    setEventForm((prev) => ({ ...prev, clusterFbos: cluster }));
  }, [cluster]);

  const handleForm = (e) => {
    const isValueOnData = cluster.includes(e.target.value);
    const filteredData = cluster.filter(
      (oldValues) => oldValues != e.target.value
    );

    isValueOnData
      ? setCluster((previous) => [...filteredData])
      : setCluster((previous) => [...filteredData, e.target.value]);
  };
  // const handleFormm = (e) =>
  //   setEventForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="question-body">
      <h2 className="font-black">Which FBOs were involved?</h2>
      <div className="grid grid-cols-2">
        <div className="grid gap-5 items-start">
          {fbosArray
            .slice(0, Math.round(fbosArray.length / 2))
            .map((option) => (
              <label key={option.namefbo} className="flex gap-x-5 items-center">
                <input
                  type="checkbox"
                  name="clusterFbos"
                  value={option.namefbo}
                  onChange={handleForm}
                  defaultChecked={eventForm?.clusterFbos.includes(option.namefbo)? "checked" : false}
                />
                <p>{option.namefbo}</p>
              </label>
            ))}
        </div>
        <div className="grid gap-5 items-start">
          {fbosArray.slice(Math.round(fbosArray.length / 2)).map((option) => (
            <label key={option.namefbo} className="flex gap-x-5 items-center">
              <input
                type="checkbox"
                name="clusterFbos"
                value={option.namefbo}
                onChange={handleForm}
                defaultChecked={eventForm?.clusterFbos.includes(option.namefbo)? "checked" : false}
              />
              <p>{option.namefbo}</p>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClusterFbos;
