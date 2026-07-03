
import { Button } from "@/components/ui/button"
import Cat from "@/components/Cat"

export default function Login() {  
    
    return( 
        <div>
            <h1 className="size-24 text-red-500"> 
            LOGIN PAGE
            </h1>
            <div className="size-64">
                <Cat />
            </div>
            <Button variant="default" className="bg-blue-500 text-white hover:bg-blue-600">
                Login
            </Button>
            
            
        </div>
    )
}

