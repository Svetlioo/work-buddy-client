/* eslint-disable react/prop-types */
import styles from "./CollaborationInfo.module.css";

function CollaborationInfo({ collaborationData }) {
  const { empID1, empID2, projectCollaborations, totalCollaborationDays } =
    collaborationData;

  return (
    <div className={styles["collaboration-container"]}>
      <h2 className={styles.heading}>Longest Collaborating Pair</h2>
      <div className={styles["employee-info"]}>
        <div>
          <strong>Employee ID 1:</strong> {empID1}
        </div>
        <div>
          <strong>Employee ID 2:</strong> {empID2}
        </div>
      </div>

      <div className={styles["bordered-container"]}>
        <h3 className={styles["total-days-heading"]}>
          Total Collaboration Days
        </h3>
        <div className={styles["total-days"]}>{totalCollaborationDays}</div>
      </div>

      <h3 className={styles["project-heading"]}>Project Collaborations</h3>
      <table className={styles["project-table"]}>
        <thead>
          <tr>
            <th>Project ID</th>
            <th>Duration</th>
            <th>Date From</th>
            <th>Date To</th>
          </tr>
        </thead>
        <tbody>
          {projectCollaborations?.map((project, index) => (
            <tr key={index}>
              <td>{project.projectID}</td>
              <td>{project.duration} days</td>
              <td>{project.dateFrom}</td>
              <td>{project.dateTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CollaborationInfo;
