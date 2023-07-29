// src/components/Navbar.js
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {NavbarLinkType} from '../helpers/types';

const navbarLinks: NavbarLinkType[] = [
  {
    title: 'NEWS',
    href: '/',
  },
  {
    title: 'FEATURES',
    href: '/features',
  },
  {
    title: 'TOPICS',
    href: '/topics',
  },
  {
    title: 'VIDEO',
    href: '/videos',
  },
  {
    title: 'LIVE',
    href: '/live',
    icon: (
      <View
        style={{
          backgroundColor: '#FB2040',
          height: 6,
          width: 6,
          borderRadius: 3,
          alignSelf: 'center',
          marginRight: 1,
        }}
      />
    ),
    iconPosition: 'left',
  },
];

const Navbar = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuShown(!isMobileMenuShown);
  };

  return (
    <>
      <ScrollView
        horizontal={true}
        style={styles.container}
        contentContainerStyle={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={styles.linksContainer}>
          {navbarLinks.map(link => (
            <TouchableOpacity key={link.title} style={styles.link}>
              {link.iconPosition === 'left' && link.icon}
              <Text style={styles.linkText}>{link.title}</Text>
              {link.iconPosition === 'right' && link.icon}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#007BFF',
    height: 56,
    paddingHorizontal: 16,
  },
  linksContainer: {
    flexDirection: 'row',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  linkText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 6,
  },
  mobileMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  mobileMenuItemText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 6,
  },
});

export default Navbar;
