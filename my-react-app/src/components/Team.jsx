import './Team.css';

function Team() {
  return (
    <section className="team">
      <div className="team-header">
        <h2>Meet Our Team</h2>
        <p>Our talented professionals are dedicated to delivering quality and creativity in every project.</p>
      </div>

      <div className="team-grid">
        <div className="team-member">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Team Member 1" />
          <h3>John Carter</h3>
          <p>CEO & Founder</p>
        </div>

        <div className="team-member">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member 2" />
          <h3>Emily Davis</h3>
          <p>Lead Designer</p>
        </div>

        <div className="team-member">
          <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Team Member 3" />
          <h3>Michael Brown</h3>
          <p>Senior Developer</p>
        </div>

        <div className="team-member">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team Member 4" />
          <h3>Sarah Wilson</h3>
          <p>Marketing Head</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
