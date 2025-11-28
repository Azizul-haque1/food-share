export default function AboutPage() {
    return (
        <div className="max-w-5xl mx-auto py-14 px-6">

            {/* Header */}
            <h1 className="text-4xl font-bold text-primary">
                About Food Share
            </h1>

            <p className="mt-4 text-gray-700 leading-relaxed">
                Food Share is a community-powered platform that helps reduce food waste
                by connecting people who have extra food with those who need it.
                Our mission is simple — <span className="font-semibold text-secondary">
                    share what you can, take what you need</span>.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-primary">
                Why We Created Food Share
            </h2>

            <p className="mt-3 text-gray-700 leading-relaxed">
                Every day, good food is thrown away while many families struggle to access meals.
                Food Share bridges this gap by allowing users to donate, request, or share food
                within their local community — making food sharing easier, safer, and more human.
            </p>


            <h2 className="mt-10 text-2xl font-semibold text-primary">
                How It Works
            </h2>

            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li><span className="text-secondary font-medium">Share Food:</span> Users post extra food they want to offer.</li>
                <li><span className="text-secondary font-medium">Find Food:</span> Others browse available items nearby.</li>
                <li><span className="text-secondary font-medium">Contact:</span> Requesters connect securely with donors.</li>
                <li><span className="text-secondary font-medium">Pickup:</span> Food is collected by mutual agreement.</li>
            </ul>


            <h2 className="mt-10 text-2xl font-semibold text-primary">
                Our Vision
            </h2>

            <p className="mt-3 text-gray-700 leading-relaxed">
                We envision a future where no food is wasted and no person stays hungry.
                Food Share promotes kindness, sustainability, and community impact.
            </p>

            {/* Section */}
            <h2 className="mt-10 text-2xl font-semibold text-primary">
                Join the Movement
            </h2>

            <p className="mt-3 text-gray-700 leading-relaxed">
                Whether you want to donate or need support, Food Share welcomes you.
                Together, we create a stronger, healthier, more connected community.
            </p>
        </div>
    );
}
