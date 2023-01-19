import GenericTasks from "../general/GenericTasks";

const buttons = [
    {
      to: "industry/current-jobs",
      title: "Current Jobs"
    },
    {
      to: "industry/new-job",
      title: "New Job"
    },
    {
      to: "industry/job-history",
      title: "Job History"
    },
    {
      to: "industry/blueprints",
      title: "Blueprints"
    },
    {
      to: "industry/new-blueprint",
      title: "New Blueprint"
    },
  ];

export default function Industry() {
    return <GenericTasks heading="Industry Tasks" buttons={buttons}/>
}