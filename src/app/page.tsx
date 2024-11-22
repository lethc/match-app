import { Button, Link } from '@nextui-org/react'
import { FaRegSmile } from 'react-icons/fa'

export default function Home() {
    return (
        <div>
            <h1 className='text-3xl'>This is a random text</h1>
            <Button 
                as={Link}
                href='/members'
                color='primary' 
                variant='bordered'
                startContent={<FaRegSmile size={20} />}
            >
                Click Me
            </Button>
        </div>
    )
}
