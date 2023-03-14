export default function YIP({selectedDate, selectedEvents, selectedEventsOutputs}) {
    return (
        <section>
            <h1>Learned from CBT, ALI, YIP</h1>
            <h3 className="">
            When reporting on the events they delivered, FBOs were asked:
            </h3>
            <br/>
            <p>
              What have you learned from the Black Health Capacity Trainings, including ALI and YIP, during this quarter?
               How was the information useful to you and the community you serve? They answered:
            </p>
            <br/>
            <ul className="">
              {selectedEvents?.map(event => event.capacitytraininguseful && (
                  <li className="list-disc text-lg">{event.capacitytraininguseful}</li>
              ))}
            </ul>
        </section>
    );
}


