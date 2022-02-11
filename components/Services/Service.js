import { motion } from 'framer-motion'

export default function Service({ service }) {
  const { name, id, gender, child } = service
  const gender_ru = gender === 'male' ? 'Мужской' : gender === 'female' ? 'Женский': undefined;
  return (
    <motion.div className="item">
      <div className="service">
        <h1 className="service__name">{name}</h1>
        {gender && <p className="badge">
          <img src={`./${gender}.svg`}/>
          <span>{gender_ru}</span>
          </p>}
        <div className="service__list">
          {child.map((c) => {
            const { duration, name, price, description, child } = c

            return (
              <div className="service__child" key={name + price}>
                <p className="service__child_name">{name}</p>
                {duration && <p className="flex items-center mb-2 text-lg">
                <img className="timer" src="./timer.svg"/>
                  {c.duration}</p>
                }
                {price && <p className="flex items-center mb-2 text-lg">
                <img className="timer" src="./price.svg"/>
                  {c.price} тг</p>}
                {description && <p className="service__desc">
                  <span className="absolute -top-4 left-1 bg-gray-800 text-gray-300 text-xs font-semibold rounded-lg px-2 py-1">Описание</span>
                  {c.description}
                  </p>}
                 
                {child && <div className="flex flex-col">{child.map((c) => {
                  const { duration, name, price, description } = c
                  return (
                    <div className="subChild" key={name + price}>
                     <p className="text-lg text-gray-300 font-semibold mb-2">{name}</p>
                     {duration && <p className="flex items-center mb-2 text-lg">
                      <img src="./timer.svg"/>
                       {c.duration}
                       </p>}
                     {price && <p className="flex items-center mb-2 text-lg">
                      <img className="timer" src="./price.svg"/>
                       {c.price} тг</p>}
                     {description && <p className="">{c.description}</p>}
                    </div>
                  )
                })}</div>}
              </div>
            )
          })}
        </div>

        <style jsx>{`
          .service {
            height: 100%;
            padding: 1rem;
            background: #26282a;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            overflow: hidden;

          }
          .service__name {
            font-size: 1.5rem;
            font-family: 'Merriweather', serif;
            color: white;
            margin-bottom: 1rem;
            text-align: center;
          }
          .service__list {
            height: 100%;
            padding-bottom: 10rem;
            overflow-y: scroll;
          }
          .service__child {
            color: white;
            margin-top: 2rem;
            padding: 0.25rem 0.5rem;
            background: #212325;
            border-radius: 1rem;
          }
          .service__child_name {
            display: inline-block;
            padding: 0.5rem 1rem;
            font-size: 1.1rem;
            border-radius: 0.75rem;
            margin: 0;
            background: #323537;
            transform: translateY(-1rem);
          }
          .badge {
            display: inline-flex;
            align-items: center;
            border-radius: 99rem;
            padding: 0.5rem 1rem;
            background: #5d675f;
            font-size: 0.75rem;
            font-weight: bold;
            color: lightgrey;
            margin-bottom: 1rem;
          }
          .badge img {
            width: 1.25rem;
            height: 1.25rem;
            margin-right: 0.5rem;
          }

          .timer {
            width: 2rem;
            height: 2rem;
            margin-right: 0.5rem;
          }

          .subChild {
            margin-bottom: 1rem;
            flex-direction: column;
            background-color: #2d3033;
            border-radius: 0.5rem;
            padding: 0.5rem 0.75rem;
          }

          .service__desc {
            position: relative;
            background-color: #2d3033;
            border-radius: 0.5rem;
            padding: 0.5rem 0.75rem;
            margin-top: 2rem;
            margin-bottom: 0.5rem;
          }
        `}</style>
      </div>
    </motion.div>
  )
}