import Link from 'next/link';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
              <Image src="https://i.postimg.cc/8kvf6rQv/logo-syacademy.png" alt="SyAcademy Logo" width={32} height={32} />
              <span className="font-headline">أكاديمية ساي</span>
            </Link>
            <p className="text-sm">تمكين التعليم للجميع.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">تويتر</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">انستغرام</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">لينكد إن</span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><Link href="#about" className="hover:text-white">من نحن</Link></li>
                <li><Link href="#courses" className="hover:text-white">المسارات</Link></li>
                <li><Link href="#" className="hover:text-white">المدونة</Link></li>
                <li><Link href="#contact" className="hover:text-white">تواصل معنا</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">تواصل معنا</h3>
              <ul className="space-y-2">
                <li><a href="mailto:info@syacademy.com" className="hover:text-white">info@syacademy.com</a></li>
                <li><a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">قانوني</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white">سياسة الخصوصية</Link></li>
                <li><Link href="#" className="hover:text-white">شروط الخدمة</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} أكاديمية ساي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
