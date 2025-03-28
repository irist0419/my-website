import {Suspense, useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Kraken from '../models/Kraken'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'

const Contact = () => {
  const formRef = useRef(null);
  const [ form, setForm ] = useState({ name:'', email:'', message:''})
  const [ isLoading, setIsLoading ] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('Idle')

  const {alert, showAlert, hideAlert} = useAlert();
 
  const handleChange =(e) =>{
    setForm({...form, [e.target.name]: e.target.value })
  };
  const handleSubmit =(e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('Splash');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Iris",
        from_email: form.email,
        to_email: 'shukyee419@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() =>{
      setIsLoading(false);
      showAlert({show: true, text: 'Message sent successfully', type: 'success'})

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('Idle')
        setForm({ name:'', email:'', message:''});
      }, [3660] )

    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('Idle');
      console.log(error);
      showAlert({show: true, text: 'No message was recieved', type: 'danger'})
    })
  };
  const handleFocus =() => setCurrentAnimation('Spin');
  const handleBlur =() => setCurrentAnimation('Idle');

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
        <div className = "flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Get in Touch</h1>
          
          <form 
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit ={handleSubmit}>

            <label className="text-black-500 font-semibold">
              Name
              <input 
              type = "text" 
              name="name" 
              className="input" 
              placeholder="e.g. Joe Bruin"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}

              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input 
              type = "email" 
              name="email" 
              className="input" 
              placeholder="e.g. joebruin@ucla.edu"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}

              />
            </label>
            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
              name="message" 
              rows={4}
              className="textarea" 
              placeholder="Let me know what do you think!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}

              />
            </label>
            <button 
              type="submit"
              className="btn"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="lg:w-25 w-1/2 lg:h-auto md:h-[550px] h-[350px]">
          <Canvas camera={{
            position: [0, 0, 5],
            fov: 75,
            near:0.1,
            far:1000
          }}>
          <directionalLight intensity={2.5} position={[0, 3 , 1]}/>
          <ambientLight intensity={3} />
            <Suspense fallback = {<Loader />}>
              <Kraken
                currentAnimation={currentAnimation}
                position={[0.8, -1, 0]}
                rotation={[0, -0.45, 0]}
                scale ={[0.001,0.001,0.001]}
              />
            </Suspense>
          </Canvas>
        </div>
    </section>
  )
}

export default Contact