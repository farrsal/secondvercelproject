import type React from "react"

const ProfilePoem: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">London Love Tale</h2>
      <pre className="whitespace-pre-wrap font-serif text-lg text-gray-700 leading-relaxed">
        {`In London's heart, where red buses roam,
A blonde girl finds her perfect home.
With Josh by her side, love's tale unfolds,
And a fox red pup, their hearts he holds.

Strolls through parks, where leaves turn gold,
Their laughter echoes, a joy to behold.
The puppy prances on leash so tight,
His copper coat gleaming in sunlight.

Josh and his love, hand in hand they walk,
Through cobbled streets, they smile and talk.
Big Ben chimes, a soundtrack so sweet,
To their urban romance, so hard to beat.

The Lab grows fast, but stays young at heart,
In this city of dreams, he plays his part.
A family of three, in London's embrace,
Finding love and adventure in every place.

Blonde hair flying in the Thames' cool breeze,
Josh's warm smile puts her heart at ease.
With loyal pup bounding at their feet,
Their London life is now complete.`}
      </pre>
    </div>
  )
}

export default ProfilePoem

