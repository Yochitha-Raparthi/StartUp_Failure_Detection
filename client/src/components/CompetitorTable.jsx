function CompetitorTable({ competitors }) {

    return (

        <table className="competitor-table">

            <thead>

                <tr>

                    <th>Company</th>

                    <th>Share</th>

                    <th>Funding</th>

                    <th>Revenue</th>

                    <th>AI Score</th>

                </tr>

            </thead>

            <tbody>

                {competitors.map((c, index) => (

                    <tr key={index}>

                        <td>{c.name}</td>

                        <td>{c.market_share}%</td>

                        <td>₹ {c.funding} Cr</td>

                        <td>₹ {c.revenue} Cr</td>

                        <td>{c.ai_score}</td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default CompetitorTable;