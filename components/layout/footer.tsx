import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Foundation Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.jpeg"
                alt="The Unique & Safe Child Foundation"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-amber-400">THE UNIQUE</h3>
                <p className="text-sm text-gray-300">& SAFE CHILD FOUNDATION</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Getting the marred child a life. Supporting less privileged children across the black race.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-amber-400 transition-colors">Programs</Link></li>
              <li><Link href="/impact" className="text-gray-300 hover:text-amber-400 transition-colors">Impact</Link></li>
              <li><Link href="/volunteer" className="text-gray-300 hover:text-amber-400 transition-colors">Volunteer</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-amber-400 transition-colors">Events</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-amber-400 transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/donate" className="text-gray-300 hover:text-amber-400 transition-colors">Donate</Link></li>
              <li><Link href="/store" className="text-gray-300 hover:text-amber-400 transition-colors">Store</Link></li>
              <li><Link href="/sponsor" className="text-gray-300 hover:text-amber-400 transition-colors">Sponsor a Child</Link></li>
              <li><Link href="/corporate" className="text-gray-300 hover:text-amber-400 transition-colors">Corporate Partners</Link></li>
              <li><Link href="/fundraise" className="text-gray-300 hover:text-amber-400 transition-colors">Fundraise</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Stay Connected</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300">+234 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300">info@uniquesafe.org</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium text-white mb-2">Newsletter</h5>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} The Unique & Safe Child Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
