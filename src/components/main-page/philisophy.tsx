"use client"

import MainContent from "./text-content"
import SubTitle from "./sub-title"

export default function Philosophy() {
    return (
        <div>
            <div>
                <SubTitle title="Philosophy" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img className="md:justify-self-start justify-self-center" src="https://placehold.co/600x400/FFFFFF/000" /> <MainContent />
                <img className="md:justify-self-start justify-self-center" src="https://placehold.co/600x400/FFFFFF/000" /> <MainContent />
                <img className="md:justify-self-start justify-self-center" src="https://placehold.co/600x400/FFFFFF/000" /> <MainContent />
            </div>
        </div>
    )
  }