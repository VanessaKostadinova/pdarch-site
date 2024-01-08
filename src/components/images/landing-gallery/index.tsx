import SubTitle from "@/components/main-page/heading";

export default function LandingGallery() {
    return (
        <div>
            <SubTitle title="Projects" />
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <img className="row-span-2 h-full" src="https://placehold.co/600x840/FFFFFF/000" />
                <img className="" src="https://placehold.co/600x400/FFFFFF/000" />
                <img className="" src="https://placehold.co/600x400/FFFFFF/000" />
            </div>
        </div>
    )
  }