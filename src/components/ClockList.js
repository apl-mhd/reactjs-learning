import Clock from "./Clock";

function ClockList({quantites = []}){
    return(

        <div>
            {quantites.map((clock) => <Clock key={clock} />)}
        </div>
    ); 
}

export default ClockList