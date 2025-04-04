
// import widget/custom components
import { JobListingListviewCard } from 'widgets';

// import data files
import JobsListingData from 'data/marketing/jobs/JobsListingData';

const SimilarJobs = ({ slug }) => {
    return (
        <div className="mt-12">
            <h2 className="mb-4">Similar Jobs</h2>
            {JobsListingData.filter(function (dataSource) {
                return dataSource.slug !== slug;
            }).slice(0, 4).map((job, index) => {
                return (<JobListingListviewCard item={job} key={index} />);
            })}
        </div>
    )
}

export default SimilarJobs