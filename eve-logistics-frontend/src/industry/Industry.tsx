import GenericTasks from "../general/GenericTasks";

const buttons = [
    {
      to: "current-jobs",
      title: "Current Jobs"
    },
    {
      to: "new-job",
      title: "New Job"
    },
    {
      to: "job-history",
      title: "Job History"
    },
    {
      to: "blueprints",
      title: "Blueprints"
    },
    {
      to: "new-blueprint",
      title: "New Blueprint"
    },
  ];

export default function Industry() {
    return <GenericTasks heading="Industry Tasks" buttons={buttons}/>
}