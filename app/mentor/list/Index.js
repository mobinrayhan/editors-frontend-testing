'use client';

// import sub components
import FilterMentorHero from "./components/FilterMentorHero"
import ListOfMentors from "./components/ListOfMentors"

const MentorList = () => {
    return (
        <main>

            {/* Mentor list hero section */}
            <FilterMentorHero />

            {/* List all mentors with summary */}
            <ListOfMentors />

        </main>
    )
}

export default MentorList