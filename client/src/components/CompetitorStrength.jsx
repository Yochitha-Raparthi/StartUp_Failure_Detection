function CompetitorStrength({ competitors }) {

    return (

        <div className="strength-grid">

            {competitors.map((c, index) => (

                <div className="strength-card" key={index}>

                    <h3>{c.name}</h3>

                    <h4>Strengths</h4>

                    <ul>

                        {c.strengths.map((s, i) => (

                            <li key={i}>✅ {s}</li>

                        ))}

                    </ul>

                    <h4>Weaknesses</h4>

                    <ul>

                        {c.weaknesses.map((w, i) => (

                            <li key={i}>❌ {w}</li>

                        ))}

                    </ul>

                </div>

            ))}

        </div>

    );

}

export default CompetitorStrength;