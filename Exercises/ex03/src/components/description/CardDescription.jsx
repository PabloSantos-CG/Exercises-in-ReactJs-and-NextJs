import ContactDetails from './ContactDetails'
import DescriptionProfile from './DescriptionProfile'
import ProfilePicture from './ProfilePicture'
import SocialMedia from './SocialMedia'
import TitleProfile from './TitleProfile'
import style from './style.module.css'

export default function CardDescription() {
  return (
    <div className={
      style.cardDescription
    }
    >
      <ProfilePicture />
      <TitleProfile />
      <DescriptionProfile />
      <ContactDetails />
      <SocialMedia />
    </div>
  )
}